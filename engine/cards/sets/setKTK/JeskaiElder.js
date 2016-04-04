"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JeskaiElderBase = require("../setDDN/JeskaiElder.js");

class JeskaiElder extends JeskaiElderBase {
  constructor(game) {
    super(game, "Jeskai Elder", "Khans of Tarkir", "KTK");
  }
}

module.exports = JeskaiElder;
