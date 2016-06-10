"use strict";
const Constants = require ("../../../Constants");
const LudevicsTestSubjectBase = require("../setISD/LudevicsTestSubject");

class LudevicsTestSubject extends LudevicsTestSubjectBase {
  constructor (game) {
    super(game, "Ludevic's Test Subject", "Launch Parties", "pLPA");
  }
}

module.exports = LudevicsTestSubject;
