"use strict";
const Constants = require ("../../../Constants");
const NessianCourserBase = require("../setTHS/NessianCourser");

class NessianCourser extends NessianCourserBase {
  constructor (game) {
    super(game, "Nessian Courser", "Future Sight", "FUT");
  }
}

module.exports = NessianCourser;
