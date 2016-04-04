"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LudevicsTestSubjectBase = require("../setISD/LudevicsTestSubject.js");

class LudevicsTestSubject extends LudevicsTestSubjectBase {
  constructor(game) {
    super(game, "Ludevic's Test Subject", "Launch Parties", "pLPA");
  }
}

module.exports = LudevicsTestSubject;
