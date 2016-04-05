"use strict";
const Constants = require ("../../../Constants");
const BloodSeekerBase = require("../setM12/BloodSeeker");

class BloodSeeker extends BloodSeekerBase {
  constructor(game) {
    super(game, "Blood Seeker", "Zendikar", "ZEN");
  }
}

module.exports = BloodSeeker;
