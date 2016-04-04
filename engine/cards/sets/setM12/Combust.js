"use strict";
const Constants = require ("../../../Constants");
const CombustBase = require("../setM11/Combust");

class Combust extends CombustBase {
  constructor(game) {
    super(game, "Combust", "Magic 2012", "M12");
  }
}

module.exports = Combust;
