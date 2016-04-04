"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhosphorescentFeastBase = require("../setEVE/PhosphorescentFeast.js");

class PhosphorescentFeast extends PhosphorescentFeastBase {
  constructor(game) {
    super(game, "Phosphorescent Feast", "Future Sight", "FUT");
  }
}

module.exports = PhosphorescentFeast;
