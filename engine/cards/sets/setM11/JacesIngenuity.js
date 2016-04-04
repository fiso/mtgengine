"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JacesIngenuityBase = require("../setDDM/JacesIngenuity.js");

class JacesIngenuity extends JacesIngenuityBase {
  constructor(game) {
    super(game, "Jace's Ingenuity", "Magic 2011", "M11");
  }
}

module.exports = JacesIngenuity;
