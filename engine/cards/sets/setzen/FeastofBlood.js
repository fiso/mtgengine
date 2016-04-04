"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FeastofBloodBase = require("../setpMEI/FeastofBlood.js");

class FeastofBlood extends FeastofBloodBase {
  constructor(game) {
    super(game, "Feast of Blood", "Zendikar", "ZEN");
  }
}

module.exports = FeastofBlood;
