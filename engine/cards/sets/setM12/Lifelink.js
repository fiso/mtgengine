"use strict";
const Constants = require ("../../../Constants");
const LifelinkBase = require("../setM10/Lifelink");

class Lifelink extends LifelinkBase {
  constructor(game) {
    super(game, "Lifelink", "Magic 2012", "M12");
  }
}

module.exports = Lifelink;
