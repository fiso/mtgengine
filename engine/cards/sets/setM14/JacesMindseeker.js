"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JacesMindseekerBase = require("../setDDM/JacesMindseeker.js");

class JacesMindseeker extends JacesMindseekerBase {
  constructor(game) {
    super(game, "Jace's Mindseeker", "Magic 2014 Core Set", "M14");
  }
}

module.exports = JacesMindseeker;
