"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JuxtaposeBase = require("../setCHR/Juxtapose.js");

class Juxtapose extends JuxtaposeBase {
  constructor(game) {
    super(game, "Juxtapose", "Fifth Edition", "5ED");
  }
}

module.exports = Juxtapose;
