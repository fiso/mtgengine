"use strict";
const Constants = require ("../../../Constants");
const JacesIngenuityBase = require("../setM15/JacesIngenuity");

class JacesIngenuity extends JacesIngenuityBase {
  constructor (game) {
    super(game, "Jace's Ingenuity", "Magic 2011", "M11");
  }
}

module.exports = JacesIngenuity;
