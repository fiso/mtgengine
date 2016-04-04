"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JwarIsleRefugeBase = require("../setC13/JwarIsleRefuge.js");

class JwarIsleRefuge extends JwarIsleRefugeBase {
  constructor(game) {
    super(game, "Jwar Isle Refuge", "Zendikar", "ZEN");
  }
}

module.exports = JwarIsleRefuge;
