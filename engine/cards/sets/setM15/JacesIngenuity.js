"use strict";
const Constants = require ("../../../Constants");
const JacesIngenuityBase = require("../setDDM/JacesIngenuity");

class JacesIngenuity extends JacesIngenuityBase {
  constructor(game) {
    super(game, "Jace's Ingenuity", "Magic 2015 Core Set", "M15");
  }
}

module.exports = JacesIngenuity;
