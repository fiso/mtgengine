"use strict";
const Constants = require ("../../../Constants");
const DinrovaHorrorBase = require("../setBBD/DinrovaHorror");

class DinrovaHorror extends DinrovaHorrorBase {
  constructor (game) {
    super(game, "Dinrova Horror", "Modern Masters 2017", "MM3");
  }
}

module.exports = DinrovaHorror;
