/* eslint-disable react/prop-types */
const SurveyCompleted = ({ onRestart }) => {
  return (
    <div className="w-full sm:w-1/2 mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-base font-semibold mb-4 w-full">Survey Completed</h2>
        <p>Thank you for completing the survey.</p>
      </div>

      <div className="pl-0">
        <button className="bg-white text-gray-800 px-4 py-2 rounded m-2" onClick={onRestart}>
          Restart Survey
        </button>
      </div>
    </div>
  );
};

export default SurveyCompleted;