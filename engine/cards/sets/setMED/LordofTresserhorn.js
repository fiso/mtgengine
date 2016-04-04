"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LordofTresserhornBase = require("../setALL/LordofTresserhorn.js");

class LordofTresserhorn extends LordofTresserhornBase {
  constructor(game) {
    super(game, "Lord of Tresserhorn", "Masters Edition", "MED");
  }
}

module.exports = LordofTresserhorn;
