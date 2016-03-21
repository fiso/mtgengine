"use strict";
const MTGObject = require("./MTGObject");

class Ability extends MTGObject {
  constructor(game, ability, controller, source, targets) {
    super(game);
    this._ability = ability;
    this._controller = controller;
    this._source = source;
    this._targets = targets;
  }

  resolve () {
    this._ability.resolve(this._controller, this._targets);
  }
}

module.exports = Ability;
