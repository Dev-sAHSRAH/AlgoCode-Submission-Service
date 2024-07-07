async function pingRequest(req, res) {
  console.log(this.testService);

  const response = await this.testService.pingCheck();
  return res.send({ data: response });
}

// TOOD: Add validation layer
async function createSubmission(req, res) {
  const response = await this.submissionService.addSubmission(req.body);

  return res.status(201).json({
    error: {},
    data: response,
    success: true,
    message: "Created Submission Successfully",
  });
}

module.exports = { pingRequest, createSubmission };
