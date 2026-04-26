//UserCard component

import React from "react";
import { UserCardProps } from "../interfaces";
import "./UserCard.css";

// Map role keys to emoji + label for cleaner display
const roleConfig: Record<string, { label: string; color: string }> = {
  admin:     { label: "Admin",      color: "#e94560" },
  moderator: { label: "Moderador",  color: "#ff9a3c" },
  customer:  { label: "Cliente",    color: "#00c9a7" },
};

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const role = roleConfig[user.role] ?? { label: user.role, color: "#9999cc" };

  // Build avatar initials as fallback
  const initials = user.fullName
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className={`user-card ${!user.isActive ? "user-inactive" : ""}`}>
      {/* Status indicator dot */}
      <span className={`user-status-dot ${user.isActive ? "online" : "offline"}`} />

      {/* Avatar */}
      <div className="user-avatar" aria-label={user.fullName}>
        {user.avatarUrl ? (
          <img src={user.avatarUrl} alt={user.fullName} />
        ) : (
          <span className="avatar-initials">{initials}</span>
        )}
      </div>

      {/* Core info */}
      <div className="user-details">
        <h3 className="user-name">{user.fullName}</h3>
        <span className="user-role" style={{ color: role.color }}>
          {role.label}
        </span>
        <p className="user-email">{user.email}</p>

        {/* Location */}
        <p className="user-location">
          📍 {user.address.city}, {user.address.country}
        </p>

        {/* Favorite groups tags */}
        {user.favoriteGroups && (
          <div className="user-groups">
            {user.favoriteGroups.map((g) => (
              <span key={g} className="group-tag">
                {g}
              </span>
            ))}
          </div>
        )}

        <p className="user-date">Desde {user.createdAt}</p>
      </div>
    </div>
  );
};

export default UserCard;
