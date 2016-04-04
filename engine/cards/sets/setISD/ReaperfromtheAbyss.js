"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReaperfromtheAbyssBase = require("../setC14/ReaperfromtheAbyss.js");

class ReaperfromtheAbyss extends ReaperfromtheAbyssBase {
  constructor(game) {
    super(game, "Reaper from the Abyss", "Innistrad", "ISD");
  }
}

module.exports = ReaperfromtheAbyss;
