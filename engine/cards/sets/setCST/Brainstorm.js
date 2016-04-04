"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrainstormBase = require("../setBTD/Brainstorm.js");

class Brainstorm extends BrainstormBase {
  constructor(game) {
    super(game, "Brainstorm", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = Brainstorm;
