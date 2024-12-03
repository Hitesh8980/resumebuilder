import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { togglePersonalInfoModal, toggleEducationModal, toggleWorkExperienceModal, toggleInterestedTopicModal } from './store/slices/ModelSlices';
import PersonalInfoModal from './components/PersonalInfoModal';
import EducationModal from './components/EducationModal';
import WorkExperienceModal from './components/WorkExperienceModal';
import InterestedTopicModal from './components/InterestedModal'; 
import './index.css'; 

const App = () => {
  const dispatch = useDispatch();

  const isPersonalInfoModalOpen = useSelector((state) => state.modals.personalInfoModalOpen);
  const isEducationModalOpen = useSelector((state) => state.modals.educationModalOpen);
  const isWorkExperienceModalOpen = useSelector((state) => state.modals.workExperienceModalOpen);
  const isInterestedTopicModalOpen = useSelector((state) => state.modals.interestedTopicModalOpen);

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <div className="relative inline-block">
          <img 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAACUCAMAAADbGilTAAAAMFBMVEXk5ueutLeor7Le4OHn6erU19nh4+Tq7O3KztCzuLu9wcTN0dPHy83a3d7X2tzEyMqh5tVuAAAD3ElEQVR4nO2c3XLjIAyFbSzMX8Dv/7aL42w2zdoOICLhKd9V26szGiEk69Bh6HQ6nU6n0+l0Op1O5/eilJpDxPv4I3CrOSQqm5wdxZNxkdP9z60B4LVZBb4Qf7PaQ2NqQQVrfuh8YqxX3PJ+4A+EbuG1czOhhWk5UXrPBd2IWiXPgvpQa0ILiQDLJ6Ebmj+ys/0Y1Edol5ldaprSVazljSyYZKlrZDnFzjlS18gyak1PAO7Iqg9ldU+s4yldELKlRgJLZKe8ZH1gOSpX6h3whuC4E4oyYBVLL1WVKY2QXwkgC8M6Mhyv3NL6wkKrFFy51HH0tGLLisCGuJEmQVltfYolvbxc+clatUrCwGa1gjtYwsACKqxxDqeTWnxnPaErsQpTBe7QNQUKcRFsEPbcyKNF2Rl6rNTRTERSQV5IK6oZ2KBqCWpoDVRaNVqqkF1r10ql9Upn60o160J3weDR/QCd1szPrjvQ9S4KrZWuJ7xSrw24MTZCOMheaTbEJizpzK2v8y1jmFBhpf1GhPmkSb05utQ3TczYTb2KwXyDJz1Zd7HlYSVWigismOgXXKW7uBvDRhbKuljD4s4o62DID9ZGwU6e0aGT7XVgtLxkro5YPSTDnKWV16sHGWMiu60QpmQvmW3ACpsmVhBvt/dRLiEPjGzB+7jeYJ9CKxaGJmAfGOR45tU11M31KaDkYSJYpmv1mBjbxYi36AphF9mat3wFhiloK148+1aHuYFCdQTA7KXT2slpbjGgL0BEPVh/5tazS5QIg/fBxZje7qyxDT6euqaemsTwebdYs1sJjLHat5C1MTun4Oz725L3+roes5v0jAkMapba/lenDgVHvY7ncQyAtPnDobFuoG0MYJiDTYzn//E1biJLX4CgP78qOZM7LpJELSh/9PopB+O+nrkwhApCN/SXlcrUiSUBMervdbUqoH1Zb2qN/k4mwIzewO1gvuDWg8Gdtf7l1B9v0kfrfLGm7tygKrgbTqi4moPkt2+FxOGxUmg/j9QVcFXEKrzTMYUa+7kK5pYkKnzvrODFShaL/IyocAvtTLGo5gu5e88Fs/zEe0XyQOQsBFKlI2JbDzhDQxmFOyW8Y6yEouYACjZtFSjZgZa9fq1AQSMzM0kdRX5rUHlcySDXw0lfrv6R/cSPL6yrcyMrrAjnTQWyjhfe4IpCZIwJbPXqLxk2A+DM1pWM5R3eO44lucbSzQKHJDeHGf+z5Vskl608Y8h3tLpErdxVYCWxEjA1gz9JtB4zXwQbIq2NVQ2ENdl+3oLWManZYr9gN5IOV+yxWsAk5cA8NUGK1M5v4w/fKzXEWjfurQAAAABJRU5ErkJggg==" 
            alt="" 
            className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-blue-500" 
          />
        </div>
        
      </div>

      {/* Buttons to open modals */}
      <div className="mb-4 text-center">
        <button 
          onClick={() => dispatch(togglePersonalInfoModal())} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2"
        >
          Personal Info
        </button>
        <button 
          onClick={() => dispatch(toggleEducationModal())} 
          className="bg-green-500 text-white px-4 py-2 rounded-md mx-2"
        >
          Education
        </button>
        <button 
          onClick={() => dispatch(toggleWorkExperienceModal())} 
          className="bg-purple-500 text-white px-4 py-2 rounded-md mx-2"
        >
          Work Experience
        </button>
        <button 
          onClick={() => dispatch(toggleInterestedTopicModal())} 
          className="bg-orange-500 text-white px-4 py-2 rounded-md mx-2"
        >
          Interested Topic
        </button>
      </div>

      {/* Modals */}
      <PersonalInfoModal 
        isOpen={isPersonalInfoModalOpen} 
        onClose={() => dispatch(togglePersonalInfoModal())} 
      />
      <EducationModal 
        isOpen={isEducationModalOpen} 
        onClose={() => dispatch(toggleEducationModal())} 
      />
      <WorkExperienceModal 
        isOpen={isWorkExperienceModalOpen} 
        onClose={() => dispatch(toggleWorkExperienceModal())} 
      />
      <InterestedTopicModal 
        isOpen={isInterestedTopicModalOpen} 
        onClose={() => dispatch(toggleInterestedTopicModal())} 
      />
    </div>
  );
};

export default App;
