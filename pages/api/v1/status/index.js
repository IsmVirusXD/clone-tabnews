//"Rota Publica: /api/status";

function status(request, response) {
  return response.status(200).json({text: "Eu amo a Lis" });
}

export default status;
