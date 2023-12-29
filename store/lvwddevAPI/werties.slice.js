import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_werty_list = createAsyncThunk(
  "werties/api_v1_werty_list",
  async payload => {
    const response = await apiService.api_v1_werty_list(payload)
    return response.data
  }
)
export const api_v1_werty_create = createAsyncThunk(
  "werties/api_v1_werty_create",
  async payload => {
    const response = await apiService.api_v1_werty_create(payload)
    return response.data
  }
)
export const api_v1_werty_retrieve = createAsyncThunk(
  "werties/api_v1_werty_retrieve",
  async payload => {
    const response = await apiService.api_v1_werty_retrieve(payload)
    return response.data
  }
)
export const api_v1_werty_update = createAsyncThunk(
  "werties/api_v1_werty_update",
  async payload => {
    const response = await apiService.api_v1_werty_update(payload)
    return response.data
  }
)
export const api_v1_werty_partial_update = createAsyncThunk(
  "werties/api_v1_werty_partial_update",
  async payload => {
    const response = await apiService.api_v1_werty_partial_update(payload)
    return response.data
  }
)
export const api_v1_werty_destroy = createAsyncThunk(
  "werties/api_v1_werty_destroy",
  async payload => {
    const response = await apiService.api_v1_werty_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const wertiesSlice = createSlice({
  name: "werties",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_werty_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_werty_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_werty_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_werty_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_werty_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_werty_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_werty_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_werty_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_werty_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_werty_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_werty_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_werty_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_werty_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_werty_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_werty_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_werty_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_werty_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_werty_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_werty_list,
  api_v1_werty_create,
  api_v1_werty_retrieve,
  api_v1_werty_update,
  api_v1_werty_partial_update,
  api_v1_werty_destroy,
  slice: wertiesSlice
}
