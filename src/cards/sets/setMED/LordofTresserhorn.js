"use strict";
const Constants = require ("../../../Constants");
const LordofTresserhornBase = require("../setALL/LordofTresserhorn");

class LordofTresserhorn extends LordofTresserhornBase {
  constructor (game) {
    super(game, "Lord of Tresserhorn", "Masters Edition", "MED");
  }
}

module.exports = LordofTresserhorn;
