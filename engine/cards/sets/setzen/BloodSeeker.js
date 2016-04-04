"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodSeekerBase = require("../setM12/BloodSeeker.js");

class BloodSeeker extends BloodSeekerBase {
  constructor(game) {
    super(game, "Blood Seeker", "Zendikar", "ZEN");
  }
}

module.exports = BloodSeeker;
