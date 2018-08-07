"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NessianCourser extends UnimplementedCard {
  constructor (game) {
    super(game, "Nessian Courser", "Theros", "THS");
  }
}

module.exports = NessianCourser;
