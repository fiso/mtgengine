"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaskForce extends UnimplementedCard {
  constructor(game) {
    super(game, "Task Force", "Mercadian Masques", "MMQ");
  }
}

module.exports = TaskForce;
