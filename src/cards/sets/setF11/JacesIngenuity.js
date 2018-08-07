"use strict";
const Constants = require ("../../../Constants");
const JacesIngenuityBase = require("../setM15/JacesIngenuity");

class JacesIngenuity extends JacesIngenuityBase {
  constructor (game) {
    super(game, "Jace's Ingenuity", "Friday Night Magic 2011", "F11");
  }
}

module.exports = JacesIngenuity;
