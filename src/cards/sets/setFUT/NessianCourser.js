"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NessianCourser extends UnimplementedCard {
  constructor (game) {
    super(game, "Nessian Courser", "Future Sight", "FUT");
  }
}

module.exports = NessianCourser;
