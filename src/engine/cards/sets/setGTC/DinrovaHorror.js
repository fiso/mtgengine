"use strict";
const Constants = require ("../../../Constants");
const DinrovaHorrorBase = require("../setBBD/DinrovaHorror");

class DinrovaHorror extends DinrovaHorrorBase {
  constructor (game) {
    super(game, "Dinrova Horror", "Gatecrash", "GTC");
  }
}

module.exports = DinrovaHorror;
