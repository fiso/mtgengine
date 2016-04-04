"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NessianCourserBase = require("../setFUT/NessianCourser.js");

class NessianCourser extends NessianCourserBase {
  constructor(game) {
    super(game, "Nessian Courser", "Theros", "THS");
  }
}

module.exports = NessianCourser;
