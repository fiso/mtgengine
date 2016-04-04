"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LudevicsTestSubject extends Card {
  constructor(game) {
    super(game, "Ludevic's Test Subject", "Innistrad", "ISD");
  }
}

module.exports = LudevicsTestSubject;
