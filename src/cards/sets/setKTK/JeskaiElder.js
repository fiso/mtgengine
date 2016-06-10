"use strict";
const Constants = require ("../../../Constants");
const JeskaiElderBase = require("../setDDN/JeskaiElder");

class JeskaiElder extends JeskaiElderBase {
  constructor (game) {
    super(game, "Jeskai Elder", "Khans of Tarkir", "KTK");
  }
}

module.exports = JeskaiElder;
