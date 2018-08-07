"use strict";
const Constants = require ("../../../Constants");
const JacesIngenuityBase = require("../setM15/JacesIngenuity");

class JacesIngenuity extends JacesIngenuityBase {
  constructor (game) {
    super(game, "Jace's Ingenuity", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = JacesIngenuity;
