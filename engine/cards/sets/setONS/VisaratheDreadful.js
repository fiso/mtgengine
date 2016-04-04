"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VisaratheDreadfulBase = require("../setV11/VisaratheDreadful.js");

class VisaratheDreadful extends VisaratheDreadfulBase {
  constructor(game) {
    super(game, "Visara the Dreadful", "Onslaught", "ONS");
  }
}

module.exports = VisaratheDreadful;
