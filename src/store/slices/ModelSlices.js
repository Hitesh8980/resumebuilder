import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfoModalOpen: false,
  educationModalOpen: false,
  workExperienceModalOpen: false,
  interestedTopicModalOpen: false, 
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    togglePersonalInfoModal: (state) => {
      state.personalInfoModalOpen = !state.personalInfoModalOpen;
    },
    toggleEducationModal: (state) => {
      state.educationModalOpen = !state.educationModalOpen;
    },
    toggleWorkExperienceModal: (state) => {
      state.workExperienceModalOpen = !state.workExperienceModalOpen;
    },
    toggleInterestedTopicModal: (state) => {
      state.interestedTopicModalOpen = !state.interestedTopicModalOpen; 
    },
  },
});

export const { togglePersonalInfoModal, toggleEducationModal, toggleWorkExperienceModal, toggleInterestedTopicModal } = modalSlice.actions;

export default modalSlice.reducer;
