"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TaskForce extends Card {
  constructor(game) {
    super(game, "Task Force", "Mercadian Masques", "MMQ");
  }
}

module.exports = TaskForce;
