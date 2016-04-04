"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngerBase = require("../setDDI/Anger.js");

class Anger extends AngerBase {
  constructor(game) {
    super(game, "Anger", "Judgment", "JUD");
  }
}

module.exports = Anger;
