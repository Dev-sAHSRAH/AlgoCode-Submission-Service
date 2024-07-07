const SubmissionProducer = require("../producers/submissionQueueProducer");

class SubmissionService {
  constructor(submissionRepository) {
    this.submissionRepository = submissionRepository;
  }

  async pingCheck() {
    return "pong";
  }

  async addSubmission(submission) {
    const submission = await this.submissionRepository.createSubmission(
      submission
    );
    if (!submission) {
      // TODO: Add error handling
      throw { message: "Not able to create submission" };
    }
    console.log(submission);
    const response = await SubmissionProducer(submission);
    return { queueResponse: response, submission };
  }
}

module.exports = SubmissionService;
