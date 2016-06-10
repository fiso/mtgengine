"use strict";
const Constants = require ("../../../Constants");
const NessianCourserBase = require("../setFUT/NessianCourser");

class NessianCourser extends NessianCourserBase {
  constructor (game) {
    super(game, "Nessian Courser", "Theros", "THS");
  }
}

module.exports = NessianCourser;
