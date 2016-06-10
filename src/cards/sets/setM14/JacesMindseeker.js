"use strict";
const Constants = require ("../../../Constants");
const JacesMindseekerBase = require("../setDDM/JacesMindseeker");

class JacesMindseeker extends JacesMindseekerBase {
  constructor (game) {
    super(game, "Jace's Mindseeker", "Magic 2014 Core Set", "M14");
  }
}

module.exports = JacesMindseeker;
