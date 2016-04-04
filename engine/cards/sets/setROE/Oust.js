"use strict";
const Constants = require ("../../../Constants");
const OustBase = require("../setDDP/Oust");

class Oust extends OustBase {
  constructor(game) {
    super(game, "Oust", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Oust;
