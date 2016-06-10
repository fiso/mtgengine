"use strict";
const Constants = require ("../../../Constants");
const JacesIngenuityBase = require("../setDDM/JacesIngenuity");

class JacesIngenuity extends JacesIngenuityBase {
  constructor (game) {
    super(game, "Jace's Ingenuity", "Friday Night Magic", "pFNM");
  }
}

module.exports = JacesIngenuity;
