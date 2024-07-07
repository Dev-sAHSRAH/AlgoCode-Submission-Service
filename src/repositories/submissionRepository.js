const Submission = require("../models/submissionModel");

class SubmissionRepository {
  constructor() {
    this.submissionModel = Submission;
  }

  async createSubmission(submission) {
    const response = await this.submissionModel.insertOne(submission);
    return response;
  }
}

module.exports = SubmissionRepository;
