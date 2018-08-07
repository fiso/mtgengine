"use strict";
const Constants = require ("../../../Constants");
const LordofTresserhornBase = require("../setMED/LordofTresserhorn");

class LordofTresserhorn extends LordofTresserhornBase {
  constructor (game) {
    super(game, "Lord of Tresserhorn", "Alliances", "ALL");
  }
}

module.exports = LordofTresserhorn;
