"use strict";
const Constants = require ("../../../Constants");
const PhosphorescentFeastBase = require("../setEVE/PhosphorescentFeast");

class PhosphorescentFeast extends PhosphorescentFeastBase {
  constructor (game) {
    super(game, "Phosphorescent Feast", "Future Sight", "FUT");
  }
}

module.exports = PhosphorescentFeast;
