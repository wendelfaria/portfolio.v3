import { memo } from 'react'
import {
  Heart, Smile, Scale, Dumbbell, Target, TrendingUp,
  Leaf, Activity, Layers, Building2, Globe,
} from 'lucide-react'
import styles from './ServiceCard.module.css'

const iconMap = {
  Heart, Smile, Scale, Dumbbell, Target, TrendingUp,
  Leaf, Activity, Layers, Building2, Globe,
}

const ServiceCard = memo(function ServiceCard({ name, description, icon }) {
  const Icon = iconMap[icon] ?? Globe

  return (
    <article className={styles.card}>
      <div className={styles.iconWrap} aria-hidden="true">
        <Icon size={28} strokeWidth={1.75} />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  )
})

export default ServiceCard
