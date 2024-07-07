const SubmissionProducer = require("../producers/submissionQueueProducer");

class SubmissionService {
  constructor(submissionRepository) {
    this.submissionRepository = submissionRepository;
  }

  async pingCheck() {
    return "pong";
  }

  async addSubmission(submission) {
    const submissionResponse = await this.submissionRepository.createSubmission(
      submission
    );
    if (!submissionResponse) {
      // TODO: Add error handling
      throw { message: "Not able to create submission" };
    }
    console.log(submissionResponse);
    const response = await SubmissionProducer(submission);
    return { queueResponse: response, submissionResponse };
  }
}

module.exports = SubmissionService;
