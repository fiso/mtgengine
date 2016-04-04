"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodSeeker extends Card {
  constructor(game) {
    super(game, "Blood Seeker", "Magic 2012", "M12");
  }
}

module.exports = BloodSeeker;
