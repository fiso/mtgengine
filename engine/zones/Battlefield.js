"use strict";
const Zone = require("./Zone");
const Constants = require ("../Constants");

class Battlefield extends Zone {
  constructor (game) {
    super(game, Constants.zoneTypes.PUBLIC, Constants.zoneOwnership.SHARED, null, Constants.zoneIdentifiers.BATTLEFIELD);
  }

  performStateBasedActions () {
    let actionsPerformed = 0;
    this._objects.forEach(permanent => {
      if (permanent.isCreature()) {
        let shouldDie = false;
        if (permanent.hasNonPositiveToughness()) {
          shouldDie = true;
        }
        if (permanent.hasLethalDamage() && true /* FIXME: "not indestructible*/ ) {
          shouldDie = true;
        }

        if (shouldDie) {
          permanent.die();
          actionsPerformed++;
        }
      }
    });

    return actionsPerformed;
  }

  onCleanup () {
    let actionsPerformed = 0;
    this._objects.forEach(permanent => {
      permanent.onCleanup();
    });

    return actionsPerformed;
  }

  getPermanentsControlledByPlayer (player) {
    let permanents = [];
    this._objects.forEach(permanent => {
      if (permanent.isControlledBy(player)) {
        permanents.push(permanent);
      }
    });

    return permanents;
  }

  getPermanentsOwnedByPlayer (player) {
    let permanents = [];
    this._objects.forEach(permanent => {
      if (permanent.isControlledBy(player)) {
        permanents.push(permanent);
      }
    });

    return permanents;
  }
}

module.exports = Battlefield;
