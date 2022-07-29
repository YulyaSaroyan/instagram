import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import axios from "axios"

export const fetchingStories = createAsyncThunk(
    'stories/fetchingStories',
    async function () {
        const storyUsersResponse = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=30')

        const storyUsersData = await storyUsersResponse.data

        const data = storyUsersData.map(storyUser => (
            {
                id: storyUser.id,
                img: storyUser.url,
                username: storyUser.title.split(' ').join('').slice(0, 7),
            }
        ))

        return data
    }
)

const storiesSlice = createSlice({
    name: 'stories',
    initialState: {
        loading: false,
        errors: false,
        stories: [],
        slide: {},
        sliding: 0
    },
    reducers: {
        slider: (state, { payload }) => {
            if(payload.prev) {
                return {
                    ...state,
                    slide: {
                        prev: payload.prev,
                        next: payload.next
                    },
                    sliding: state.sliding + payload.value
                }
            } else {
                return {
                    ...state,
                    slide: {
                        prev: payload.prev,
                        next: payload.next
                    },
                    sliding: state.sliding - payload.value
                }
            }
        }
    },
    extraReducers: {
        [fetchingStories.pending]: state => {
            return {
                ...state,
                loading: true
            }
        },
        [fetchingStories.fulfilled]: (state, action) => {
            return {
                ...state,
                stories: [...action.payload],
                isFetched: true
            }
        },
        [fetchingStories.rejected]: state => {
            return {
                ...state,
                error: true
            }
        }
    }
})

export const { slider } = storiesSlice.actions

export const selectStories = state => state.stories

export const storiesReducer = storiesSlice.reducer