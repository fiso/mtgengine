"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RayofCommandBase = require("../setBRB/RayofCommand.js");

class RayofCommand extends RayofCommandBase {
  constructor(game) {
    super(game, "Ray of Command", "Fifth Edition", "5ED");
  }
}

module.exports = RayofCommand;
